import { createAsync } from "@solidjs/router"
import { createMemo } from "solid-js"
import { github } from "~/lib/github"

export function Footer() {
  const githubData = createAsync(() => github())
  const starCount = createMemo(() =>
    githubData()?.stars
      ? new Intl.NumberFormat("en-US", {
          notation: "compact",
          compactDisplay: "short",
        }).format(githubData()!.stars!)
      : "25K",
  )

  return (
    <footer data-component="footer">
      <div data-slot="cell">
        <a href="https://github.com/sst/opencode" target="_blank" rel="noopener">
          GitHub <span>[{starCount()}]</span>
        </a>
      </div>
      <div data-slot="cell">
        <a href="/docs">Docs</a>
      </div>
      <div data-slot="cell">
        <a href="/discord">Discord</a>
      </div>
      <div data-slot="cell">
        <a href="https://x.com/bygheartcoder">X</a>
      </div>
    </footer>
  )
}
