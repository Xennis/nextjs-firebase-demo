"use client"

import { Demo, getDemo } from "@/lib/entities/demo";
import { useEffect, useState } from "react";

export default function Home() {
  const [entity, setEntity] = useState<Demo | null | undefined>(undefined)

  useEffect(() => {
    getDemo("aFV6BvyClPD6W943yK9W").then(setEntity).catch((err) => console.error(err))
  }, [setEntity])

  if (entity === undefined) {
    return <>Loading</>
  }
  if (entity === null) {
    return <>Not found</>
  }

  return <>{entity.hello}</>
}
