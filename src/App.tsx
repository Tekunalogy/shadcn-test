import { Button } from "@/components/ui/button"
import { Terminal } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


function App() {

  return (
    <>
      <div style={{
        padding:"15px",
      }}>
        <Button>Click me</Button>
      </div>

      <div style={{
        padding:"15px",
        width: "550px"
      }}>
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
      </div>
    </>
  )
}

export default App
