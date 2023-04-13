import "../globals.css";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <body>
        <p>현대카드 무이자이벤트중</p>
        {children}
      </body>
    </div>
  );
}
