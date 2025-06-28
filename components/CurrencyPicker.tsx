"use client"

import * as React from "react"

import { useMediaQuery } from "@/hooks/use-media-query"
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
          <button className="w-[250px] justify-start bg-neutral-800 text-white hover:bg-neutral-700 p-2 rounded-md ">
            {selectedCurrency
              ? <>{selectedCurrency.symbol} {selectedCurrency.name}</>
              : <>Set currency</>}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[250px] p-0 bg-black text-white" align="start">
          <CurrencyList setOpen={setOpen} setSelectedCurrency={setSelectedCurrency} />
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen} >
        <DrawerTitle></DrawerTitle>
      <DrawerTrigger asChild>
        <button className="w-[250px] justify-start  bg-neutral-800 text-white hover:bg-neutral-700 p-2 rounded-md">
          {selectedCurrency
            ? <>{selectedCurrency.symbol} {selectedCurrency.name}</>
            : <>Set currency</>}
        </button>
      </DrawerTrigger>
      <DrawerContent className="bg-black border-none">
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
    <Command className="bg-neutral-800 text-white">
      <CommandInput placeholder="Filter currency..." className="placeholder:text-white" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {currencies.map((currency) => (
            <CommandItem
              key={currency.code}
              value={currency.code}
              onSelect={async (value) => {
                const selected = currencies.find((cur) => cur.code === value) || null;
                setSelectedCurrency(selected);
                setOpen(false);
              
                if (selected) {
                  await fetch("/api/update-currency", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ currency: selected.code }),
                  });
                }
              }}
              className="text-white data-[selected=true]:bg-neutral-700 data-[selected=true]:text-white"
            >
              {currency.symbol}&nbsp;&nbsp;{currency.name}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
