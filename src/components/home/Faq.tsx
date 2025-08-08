import React, { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

    const faqData = [
  {
    question: "What is CoffeeNest?",
    answer:
      "CoffeeNest is your personal coffee companion — a mobile app that helps you discover, review, and share the best coffee spots near you. Whether you’re into espresso bars, roasteries, or cozy latte corners, we’ve mapped them all."
  },
  {
    question: "How does CoffeeNest work?",
    answer:
      "Simply open the app, search or browse the map, and find coffee shops marked with our unique coffee-cup pins. Read reviews from fellow coffee lovers, view photos, and check ratings before you visit."
  },
  {
    question: "Where can I use CoffeeNest?",
    answer:
      "CoffeeNest works globally. Whether you’re in your hometown or traveling abroad, you can discover coffee gems anywhere in the world."
  },
  {
    question: "Is CoffeeNest free?",
    answer:
      "Yes! You can explore, review, and share coffee spots without any cost. Optional premium features may be available in the future."
  },
  {
    question: "Can I add my own coffee shop?",
    answer:
      "Absolutely. Business owners and customers can submit new coffee shop listings, complete with photos and details, to share with the community."
  },
  {
    question: "Do I need an account to leave a review?",
    answer:
      "Yes. Creating an account helps us maintain authenticity and prevent spam, ensuring our reviews stay trustworthy."
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer help through our in-app support, email assistance, and an upcoming CoffeeNest community forum where users can connect and share tips."
  },
  {
    question: "How do I get started with CoffeeNest?",
    answer:
      "Just download CoffeeNest from your app store, sign up for free, and start exploring the best coffee spots around you."
  }
];

function Faq() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  return (
    <div className='space-y-4'>
      {faqData.map((faq, index) => (
              <Collapsible
                key={index}
                open={openFAQ === index}
                onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <Card className="bg-gradient-800/60 backdrop-blur-xl border-gradient-700/50 hover:border-primary-400/50 transition-all duration-500 hover:scale-[1.02] group animate-card-float">
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-gradient-800/40 transition-colors duration-300 rounded-t-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-icon-glow">
                            <HelpCircle className="w-4 h-4 text-white animate-help-glow" />
                          </div>
                          <CardTitle className="text-white text-left group-hover:text-primary-200 transition-colors duration-300">
                            {faq.question}
                          </CardTitle>
                        </div>
                        {openFAQ === index ? (
                          <ChevronUp className="w-5 h-5 text-gradient-400 group-hover:text-primary-300 transition-all duration-300 animate-chevron-glow" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gradient-400 group-hover:text-primary-300 transition-all duration-300 animate-chevron-glow" />
                        )}
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <p className="text-gradient-300 leading-relaxed animate-text-fade-in">{faq.answer}</p>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
    </div>
  )
}

export default Faq
