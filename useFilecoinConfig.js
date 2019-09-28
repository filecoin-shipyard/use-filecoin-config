import React, { useState, useEffect } from 'react'
import Filecoin from 'filecoin-api-client'

const fc = Filecoin()

export default function useFilecoinConfig (key, options) {
  const interval = (options && options.interval) || 1000
  const [error, setError] = useState()
  const [value, setValue] = useState()

  useEffect(() => {
    let unmounted = false
    const state = { timeoutId: null }
    async function doWork () {
      try {
        const value = await fc.config.get(key)
        if (!unmounted) {
	  setValue(value)
	  setError(null)
	}
      } catch (err) {
        if (!unmounted) {
          setError(err)
	}
      }
    }
    function schedule () {
      state.timeoutId = setTimeout(async () => {
        await doWork()
        schedule()
      }, interval)
    }
    doWork().then(schedule)
    return () => {
      clearTimeout(state.timeoutId)
      unmounted = true
    }
  }, true)

  return [error, value]
}
