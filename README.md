# shadcn/ui with Vite-ReactTS

## Installation Instructions

1. Follow [these](https://ui.shadcn.com/docs/installation/vite) Vite instructions from shadcn/ui, except do these specific things:
   - In Step 1 use `npm create vite@latest my-vue-app -- --template react-ts` instead
   - Follow Steps 2-5 normally
   - Before Steps 6, do the following:
     - Clear out `src/index.css`
     - Follow Steps 3-4 of the TailwindCSS install for Vite [here](https://tailwindcss.com/docs/guides/vite)
     - Close out the TailwindCSS instructions
     - Go back and proceed to Step 6 of shadcn/ui install
   - For Step 7 I use the following:
      ```
      Which style would you like to use? › Default
      Which color would you like to use as base color? › Neutral
      Do you want to use CSS variables for colors? › yes
      ```
   - That's it. You can optionally follow Step 8 and start using shadcn/ui

## Example

- Remove `App.css`
- `npx shadcn@latest add button`
- `npx shadcn@latest add alert`

Example `App.tsx`:

```typescript
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
```
