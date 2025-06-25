"use client"

import * as React from "react"

import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { currencies } from "@/constants/currencies"
import { Currency } from "@/constants/currencies"

export default function CurrencyPicker() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [selectedCurrency, setSelectedCurrency] = React.useState<Currency | null>(null)

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button className="w-[180px] justify-start bg-neutral-800 text-white hover:bg-neutral-700 p-2 rounded-md ">
            {selectedCurrency
              ? <>{selectedCurrency.symbol} {selectedCurrency.name}</>
              : <>Set currency</>}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[220px] p-0 bg-black text-white" align="start">
          <CurrencyList setOpen={setOpen} setSelectedCurrency={setSelectedCurrency} />
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTitle></DrawerTitle>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[180px] justify-start bg-black text-white border-white">
          {selectedCurrency
            ? <>{selectedCurrency.symbol} {selectedCurrency.name}</>
            : <>+ Set currency</>}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t border-white bg-black text-white">
          <CurrencyList setOpen={setOpen} setSelectedCurrency={setSelectedCurrency} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function CurrencyList({
  setOpen,
  setSelectedCurrency,
}: {
  setOpen: (open: boolean) => void
  setSelectedCurrency: (currency: Currency | null) => void
}) {
  return (
    <Command className="bg-black text-white">
      <CommandInput placeholder="Filter currency..." className="placeholder:text-white" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {currencies.map((currency) => (
            <CommandItem
              key={currency.code}
              value={currency.code}
              onSelect={(value) => {
                setSelectedCurrency(
                  currencies.find((cur) => cur.code === value) || null
                )
                setOpen(false)
              }}
              className="text-white data-[selected=true]:bg-white data-[selected=true]:text-black"
            >
              {currency.symbol}&nbsp;&nbsp;{currency.name}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
