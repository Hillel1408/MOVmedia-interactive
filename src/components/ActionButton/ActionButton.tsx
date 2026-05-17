import classNames from "classnames";

type ActionButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function ActionButton({
  children,
  onClick,
  className,
}: ActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        "bg-[#EA5614] h-22 rounded-3xl font-semibold text-[32px] leading-10 text-white px-14",
        className,
      )}
    >
      {children}
    </button>
  );
}
