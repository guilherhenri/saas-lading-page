import './Page.css'

export function Page({ children }: { children: JSX.Element[] }) {
  return <div className="page">{children}</div>
}
