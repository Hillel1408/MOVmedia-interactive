import { useEffect, useRef, useCallback, useState } from 'react';

export const useBroadcastChannel = <T = unknown,>(channelName: string) => {
  const channelRef = useRef<BroadcastChannel | null>(null);
  const senderIdRef = useRef(crypto.randomUUID());
  const [isReady, setIsReady] = useState(false);

  // Переподключение
  const setupChannel = useCallback(() => {
    if (channelRef.current) {
      channelRef.current.close();
    }

    const channel = new BroadcastChannel(channelName);
    channelRef.current = channel;
    setIsReady(true);

    channel.postMessage({
      type: '__HANDSHAKE__',
      payload: null,
      senderId: senderIdRef.current,
      timestamp: Date.now(),
    });
  }, [channelName]);

  // Проверяем жив ли канал
  useEffect(() => {
    setupChannel();

    const pingInterval = setInterval(() => {
      if (!channelRef.current) {
        setupChannel();
        return;
      }

      try {
        channelRef.current.postMessage({
          type: '__PING__',
          payload: null,
          senderId: senderIdRef.current,
          timestamp: Date.now(),
        });
      } catch (e) {
        setupChannel();
      }
    }, 60000);

    // Проверяем канал при смене фокуса
    const handleFocus = () => {
      if (!channelRef.current) {
        setupChannel();
      }
    };

    window.addEventListener('focus', handleFocus);

    return () => {
      clearInterval(pingInterval);
      window.removeEventListener('focus', handleFocus);
      channelRef.current?.close();
    };
  }, [setupChannel]);

  const send = useCallback((type: string, payload: T) => {
    if (!channelRef.current) return false;

    channelRef.current.postMessage({
      type,
      payload,
      senderId: senderIdRef.current,
      timestamp: Date.now(),
    });
    return true;
  }, []);

  const useListen = (type: string, handler: (payload: T) => void) => {
    useEffect(() => {
      if (!channelRef.current) return;

      const listener = (event: MessageEvent) => {
        if (event.data.senderId === senderIdRef.current) return;
        if (event.data.type === '__PING__') return;
        if (event.data.type === '__HANDSHAKE__') return;
        if (event.data.type === type) handler(event.data.payload);
      };

      channelRef.current.addEventListener('message', listener);
      return () => channelRef.current?.removeEventListener('message', listener);
    }, [type, handler]);
  };

  return { send, useListen, isReady };
};
