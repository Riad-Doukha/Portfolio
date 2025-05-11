"use client"
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { useState } from "react";

const items = [
  {
    id: 1,
    title: "What services do you offer?",
    content:
      "I specialize in full-stack web development including frontend (React, Next.js), backend (Node.js, Express), database design (SQL/NoSQL), API development, and cloud deployment (AWS, Vercel).",
  },
  {
    id: 2,
    title: "How do I start working with you?",
    content:
      "Contact me with your project details. We'll discuss requirements, timeline, and budget, then sign a contract before starting development.",
  },
  {
    id: 3,
    title: "What technologies do you use?",
    content:
      "My core stack includes JavaScript/TypeScript, React, Next.js, Node.js, Express, PostgreSQL, MongoDB, and various AWS services. I also work with Python/Django when needed.",
  },
  {
    id: 4,
    title: "How long does a project typically take?",
    content:
      "Project duration depends on complexity. A basic website takes 2-4 weeks, while complex web applications may require 3-6 months. I'll provide a timeline estimate after reviewing your requirements.",
  },
  {
    id: 5,
    title: "Do you provide maintenance after deployment?",
    content:
      "Yes, I offer ongoing maintenance packages including bug fixes, security updates, and feature additions at competitive rates.",
  },
  {
    id: 6,
    title: "Can you work with existing codebases?",
    content:
      "Absolutely. I frequently help clients improve, refactor, or add features to existing applications across various tech stacks.",
  },
  {
    id: 7,
    title: "What's your pricing structure?",
    content:
      "I offer both fixed-price projects for well-defined scopes and hourly rates ($75-120/hr) for ongoing work. Let's discuss which fits your needs best.",
  },
  {
    id: 8,
    title: "Do you handle database design and optimization?",
    content:
      "Yes, database architecture is a core part of my services. I design efficient schemas, optimize queries, and implement proper indexing strategies.",
  },
  {
    id: 9,
    title: "Can you integrate third-party APIs?",
    content:
      "I regularly integrate payment gateways (Stripe, PayPal), auth providers (Auth0, Firebase), and other SaaS APIs into web applications.",
  },
  {
    id: 10,
    title: "What about security best practices?",
    content:
      "I implement OWASP standards including data validation, encryption, proper auth, rate limiting, and regular dependency updates.",
  },
];

export default function Faq() {

  const [isOpen, setIsOpen] = useState<boolean[]>([false, false, false, false, false, false, false, false, false, false])
  return (
    <div className="space-y-4 w-[35vw] [@media(max-width:755px)]:w-full mt-10 z-500">
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-2"
        defaultValue="1"
      >
        {items.map((item) => (
          <AccordionItem
            value={item.title}
            onClick={() => setIsOpen(prev => {
              const newState = [...prev];
              newState[item.id - 1] = !newState[item.id - 1];
              return newState;
            })}
            key={item.id}
            className="bg-background has-focus-visible:ring-ring/50 rounded-md border hover:border-white border-[#ffffff27] px-4 py-1 outline-none last:border-b has-focus-visible:ring-[3px]"
          >
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="focus-visible:ring-0 text-white text-h6 flex flex-1 items-center justify-between rounded-lg py-2 text-left text-[15px] leading-6 font-semibold transition-all outline-none [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                <span className={`${isOpen[item.id-1]?"line-clamp-none":"line-clamp-1"}`}>
                  {item.title}
                </span>
                <PlusIcon
                  size={16}
                  className="pointer-events-none shrink-0 text-white transition-transform duration-200"
                  aria-hidden="true"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="text-p pb-2">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
