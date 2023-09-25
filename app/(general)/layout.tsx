
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <h1>Layout general</h1>
        { children }
    </div> 
  )
}
