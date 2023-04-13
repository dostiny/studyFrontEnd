import "../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p>현대카드 무이자이벤트중</p>
      {children}
    </>
  );
}
