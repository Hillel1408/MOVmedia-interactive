import classNames from "classnames";

type InfoCardProps = {
  title: string;
  backgroundImage: string;
  children: React.ReactNode;
  className?: string;
};

export default function InfoCard({
  title,
  backgroundImage,
  children,
  className,
}: InfoCardProps) {
  return (
    <div className="p-10 border-[6px] border-[#FFE9C0] rounded-4xl bg-[linear-gradient(180deg,rgba(255,247,241,0.6)_0%,rgba(255,237,224,0.6)_100%)] my-12 mr-14">
      <h1 className="font-semibold text-[40px] leading-12 text-[#0F0F33] mb-6">
        {title}
      </h1>

      <div
        className={classNames(
          "bg-cover bg-center min-h-204.5 rounded-3xl px-6 py-7 grid gap-6 items-end",
          className,
        )}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {children}
      </div>
    </div>
  );
}
