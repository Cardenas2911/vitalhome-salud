"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface FAQItem {
  q: string;
  a: string;
}

interface MedicalFAQProps {
  items: FAQItem[];
}

export function MedicalFAQ({ items }: MedicalFAQProps) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {items.map((faq, index) => (
        <AccordionItem 
          key={index} 
          value={`item-${index}`} 
          className="bg-white border-none ring-1 ring-black/5 hover:ring-blue-400/30 transition-all shadow-sm rounded-3xl overflow-hidden px-6 lg:px-8"
        >
          <AccordionTrigger className="text-left font-black text-[#061a36] py-6 hover:no-underline text-base lg:text-lg">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="text-gray-500 font-medium text-base lg:text-lg pb-8 leading-relaxed">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
