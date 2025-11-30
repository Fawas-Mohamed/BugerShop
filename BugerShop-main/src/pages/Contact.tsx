import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">Contact Us</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a question, feedback, or want to make a reservation? We'd hear from you!
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
                  <div className="space-y-6">
                    
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <MapPin className="h-6 w-6 text-primary mt-1" />
                          <div>
                            <h3 className="font-semibold mb-1">Address</h3>
                            <p className="text-muted-foreground">
                              Colombo road, <br />
                              Kandy  
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Phone className="h-6 w-6 text-primary mt-1" />
                          <div>
                            <h3 className="font-semibold mb-1">Phone</h3>
                            <p className="text-muted-foreground">0753837488</p>
                            <p className="text-sm text-muted-foreground">Available during business hours</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Clock className="h-6 w-6 text-primary mt-1" />
                          <div>
                            <h3 className="font-semibold mb-1">Hours</h3>
                            <div className="text-muted-foreground space-y-1">
                              <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
                              <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
                              <p>Sunday: 12:00 PM - 9:00 PM</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Mail className="h-6 w-6 text-primary mt-1" />
                          <div>
                            <h3 className="font-semibold mb-1">Email</h3>
                            <p className="text-muted-foreground">bugershop@gmail.com</p>
                            <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                  </div>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                      <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          rows={6} 
                          placeholder="Tell us how we can help you..."
                          required 
                        />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;