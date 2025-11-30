import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      category: "Ordering & Delivery",
      questions: [
        {
          question: "How do I place an online order?",
          answer: "You can place an order through our website by clicking 'Order Now' and selecting your items. We offer both pickup and delivery options."
        },
        {
          question: "What are your delivery hours?",
          answer: "We deliver Monday-Thursday 11:30 AM - 9:30 PM, Friday-Saturday 11:30 AM - 10:30 PM, and Sunday 12:30 PM - 8:30 PM."
        },
        {
          question: "Is there a minimum order for delivery?",
          answer: "Yes, we have a 700 minimum order requirement for delivery. Pickup orders have no minimum."
        },
        {
          question: "How long does delivery take?",
          answer: "Typical delivery time is 30-45 minutes, depending on your location and current order volume."
        }
      ]
    },
    {
      category: "Menu & Ingredients",
      questions: [
        {
          question: "Do you have vegetarian options?",
          answer: "Absolutely! We offer several vegetarian burgers including our popular Veggie Deluxe, as well as salads and sides."
        },
        {
          question: "Can I customize my burger?",
          answer: "Yes! You can add or remove toppings, change the bun type, and adjust cooking preferences. Additional charges may apply for toppings."
        },
        {
          question: "Do you offer gluten-free options?",
          answer: "We offer gluten-free buns and can prepare your burger without cross-contamination. Please inform us of any allergies when ordering."
        },
        {
          question: "Where do you source your beef?",
          answer: "We source our beef from local farms that practice sustainable and humane farming. Our beef is never frozen and ground fresh daily."
        }
      ]
    },
    {
      category: "Reservations & Dining",
      questions: [
        {
          question: "Do you take reservations?",
          answer: "Yes, we accept reservations for parties of 4 or more. You can make a reservation through our website or by calling us."
        },
        {
          question: "Do you have outdoor seating?",
          answer: "Yes, we have a beautiful outdoor patio that's available weather permitting. Reservations recommended for outdoor seating."
        },
        {
          question: "Are you family-friendly?",
          answer: "Absolutely! We welcome families and have a kids menu with smaller portions and classic favorites."
        },
        {
          question: "Do you host private events?",
          answer: "Yes, we offer catering services and can accommodate private events. Contact us for more information about group bookings."
        }
      ]
    },
    {
      category: "Payment & Policies",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, debit cards, cash, and contactless payments including Apple Pay and Google Pay."
        },
        {
          question: "What's your cancellation policy?",
          answer: "Online orders can be cancelled up to 5 minutes after placing. For reservations, please cancel at least 2 hours in advance."
        },
        {
          question: "Do you offer loyalty rewards?",
          answer: "Yes! Join our loyalty program to earn points on every purchase and receive exclusive offers and discounts."
        },
        {
          question: "What if I'm not satisfied with my order?",
          answer: "Your satisfaction is our priority. If you're not happy with your order, please contact us and we'll make it right."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">Help Center</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our menu, ordering, and dining experience.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-12">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {categoryIndex + 1}
                    </span>
                    {category.category}
                  </h2>
                  
                  <Card>
                    <CardContent className="p-6">
                      <Accordion type="single" collapsible className="space-y-2">
                        {category.questions.map((faq, questionIndex) => (
                          <AccordionItem 
                            key={questionIndex} 
                            value={`${categoryIndex}-${questionIndex}`}
                            className="border-b border-border/40 last:border-b-0"
                          >
                            <AccordionTrigger className="text-left hover:no-underline py-4">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="pb-4 text-muted-foreground">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Card className="bg-gradient-subtle">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                  <p className="text-muted-foreground mb-6">
                    Can't find what you're looking for? Our friendly team is here to help!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="text-center">
                      <p className="font-semibold">Call Us</p>
                      <p className="text-muted-foreground">0753837488</p>
                    </div>
                    <div className="hidden sm:block w-px bg-border"></div>
                    <div className="text-center">
                      <p className="font-semibold">Email Us</p>
                      <p className="text-muted-foreground">bugershop@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;