export {}

declare global {
  interface Window {
    kofiWidgetOverlay: {
      draw: (pId: string, config: any, containerId?: string) => void
    }
  }
}

declare type PageParams = {
  id: string
}
