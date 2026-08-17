import Logo from "../logo/Logo";

export default function GNB_Large() {
  return (
    <div className="w-full h-[60px] flex items-center justify-center border-1 border-slate-200">
      <div className="w-1/2 flex items-center">
        <Logo size="Large" />
      </div>
    </div>
  );
}
