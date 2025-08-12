"use client"

import { useState } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

const faqData = [
  {
    question: "What is CoffeeNest?",
    answer:
      "CoffeeNest is your personal coffee companion — a mobile app that helps you discover, review, and share the best coffee spots near you. Whether you're into espresso bars, roasteries, or cozy latte corners, we've mapped them all.",
  },
  {
    question: "How does CoffeeNest work?",
    answer:
      "Simply open the app, search or browse the map, and find coffee shops marked with our unique coffee-cup pins. Read reviews from fellow coffee lovers, view photos, and check ratings before you visit.",
  },
  {
    question: "Where can I use CoffeeNest?",
    answer:
      "CoffeeNest works globally. Whether you're in your hometown or traveling abroad, you can discover coffee gems anywhere in the world.",
  },
  {
    question: "Is CoffeeNest free?",
    answer:
      "Yes! You can explore, review, and share coffee spots without any cost. Optional premium features may be available in the future.",
  },
  {
    question: "Can I add my own coffee shop?",
    answer:
      "Absolutely. Business owners and customers can submit new coffee shop listings, complete with photos and details, to share with the community.",
  },
  {
    question: "Do I need an account to leave a review?",
    answer:
      "Yes. Creating an account helps us maintain authenticity and prevent spam, ensuring our reviews stay trustworthy.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer help through our in-app support, email assistance, and an upcoming CoffeeNest community forum where users can connect and share tips.",
  },
  {
    question: "How do I get started with CoffeeNest?",
    answer:
      "Just download CoffeeNest from your app store, sign up for free, and start exploring the best coffee spots around you.",
  },
]

function Faq() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {faqData.map((faq, index) => {
        const isOpen = openFAQ === index
        return (
          <Collapsible key={index} open={isOpen} onOpenChange={() => setOpenFAQ(isOpen ? null : index)}>
            <Card className="border border-[#ACBDA8]/20 bg-black/50 hover:border-[#ACBDA8]/40 transition-all duration-300 hover:shadow-md rounded-xl backdrop-blur-sm">
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ACBDA8]/60 hover:bg-white/5 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0F430F] to-red-600/50 flex items-center justify-center shadow-md">
                        <HelpCircle className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-white text-left">{faq.question}</CardTitle>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#ACBDA8]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-0 pl-16">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        )
      })}
    </div>
  )
}

export default Faq
