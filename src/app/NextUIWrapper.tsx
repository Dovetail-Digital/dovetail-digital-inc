'use client'
import { NextUIProvider } from "@nextui-org/react";
import { useServerInsertedHTML } from 'next/navigation'
import { CssBaseline } from '@nextui-org/react'

export default function NextUIWrapper({children}: {children:any}) {
  useServerInsertedHTML(() => {
      return <>{CssBaseline.flush()}</>
      })
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}
