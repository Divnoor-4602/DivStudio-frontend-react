import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants";

const FAQ = () => {
  return (
    <>
      <div className="relative">
        <div className="font-bold md:text-[40px] text-3xl text-center text-white ">
          FAQ's
        </div>
        <Accordion type="single" collapsible className="w-full mt-16 z-20">
          {faqs.map((faq) => {
            return (
              <>
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="text-white text-sm md:text-xl">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-white/50">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </>
            );
          })}
        </Accordion>
        <div className="w-[400px] h-[800px] absolute green__gradient top-0 -left-[300px]  pointer-events-none "></div>
      </div>
    </>
  );
};

export default FAQ;
