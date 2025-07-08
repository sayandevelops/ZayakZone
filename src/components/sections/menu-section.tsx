'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { SectionWrapper } from '../shared/section-wrapper';
import { AnimatedSection } from '../shared/animated-section';

const menuItems = [
    { id: 1, name: 'Royal Chicken Biryani', description: 'Aromatic basmati rice cooked with chicken and exotic spices.', price: '$19.99', category: 'Main Course', image: 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2', diet: 'Non-Veg', hint: 'biryani dish' },
    { id: 2, name: 'Paneer Tikka Delight', description: 'Creamy paneer cubes marinated and grilled to perfection.', price: '$17.99', category: 'Main Course', image: 'https://images.pexels.com/photos/9609835/pexels-photo-9609835.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2', diet: 'Vegetarian', hint: 'paneer tikka' },
    { id: 3, name: 'Crispy Samosa Platter', description: 'Golden-fried pastries filled with spiced potatoes and peas.', price: '$9.99', category: 'Appetizers', image: 'https://images.pexels.com/photos/2418485/pexels-photo-2418485.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2', diet: 'Vegetarian', hint: 'samosa appetizer' },
    { id: 4, name: 'Gulab Jamun with Rabri', description: 'Soft, spongy berry-sized balls soaked in rose-scented syrup.', price: '$8.99', category: 'Desserts', image: 'https://images.pexels.com/photos/4854448/pexels-photo-4854448.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2', diet: 'Vegetarian', hint: 'indian dessert' },
    { id: 5, name: 'Spicy Lamb Vindaloo', description: 'A fiery and tangy lamb curry from the Goa region of India.', price: '$21.99', category: 'Main Course', image: 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2', diet: 'Non-Veg', hint: 'lamb curry' },
    { id: 6, name: 'Mango Lassi', description: 'A refreshing yogurt-based drink blended with sweet mangoes.', price: '$6.99', category: 'Beverages', image: 'https://images.pexels.com/photos/5946636/pexels-photo-5946636.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2', diet: 'Vegetarian', hint: 'mango lassi' },
    { id: 7, name: 'Vegetable Korma', description: 'Mixed vegetables cooked in a creamy, cashew-based sauce.', price: '$16.99', category: 'Main Course', image: 'https://images.pexels.com/photos/5639686/pexels-photo-5639686.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2', diet: 'Vegetarian', hint: 'vegetable korma' },
    { id: 8, name: 'Tandoori Roti', description: 'Whole wheat flatbread baked in a traditional clay tandoor.', price: '$3.99', category: 'Breads', image: 'https://images.pexels.com/photos/14589332/pexels-photo-14589332.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2', diet: 'Vegetarian', hint: 'indian bread' },
];

const categories = ['All', 'Main Course', 'Appetizers', 'Desserts', 'Beverages', 'Breads'];

export function MenuSection() {
    const [filter, setFilter] = useState('All');

    const filteredItems = filter === 'All' ? menuItems : menuItems.filter(item => item.category === filter);

    return (
        <SectionWrapper id="menu" className="relative overflow-hidden">
            <FloatingDish src="https://images.pexels.com/photos/1998920/pexels-photo-1998920.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2" className="top-1/4 left-4" data-ai-hint="curry dish" />
            <FloatingDish src="https://images.pexels.com/photos/10310787/pexels-photo-10310787.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2" className="bottom-1/3 right-8" data-ai-hint="naan bread" />

            <AnimatedSection>
                <div className="text-center">
                    <h2 className="font-headline text-4xl font-bold md:text-5xl text-primary">Our Exquisite Menu</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Discover a symphony of flavors, where every dish tells a story of tradition and passion.</p>
                </div>
            </AnimatedSection>
            
            <AnimatedSection delay="duration-1000">
                <div className="flex justify-center flex-wrap gap-2 mt-8">
                    {categories.map(category => (
                        <Button
                            key={category}
                            variant={filter === category ? 'default' : 'secondary'}
                            onClick={() => setFilter(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {filteredItems.map((item, index) => (
                    <AnimatedSection key={item.id} delay={`duration-${500 + index * 100}`}>
                        <Card className="h-full flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                            <CardHeader className="p-0">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-48"
                                    data-ai-hint={item.hint}
                                />
                            </CardHeader>
                            <CardContent className="p-4 flex-grow">
                                <CardTitle className="font-headline text-xl">{item.name}</CardTitle>
                                <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                            </CardContent>
                            <CardFooter className="p-4 pt-0 flex justify-between items-center">
                                <span className="font-bold text-lg text-primary">{item.price}</span>
                                <Button variant="outline" size="sm">Add to order</Button>
                            </CardFooter>
                        </Card>
                    </AnimatedSection>
                ))}
            </div>
        </SectionWrapper>
    );
}

const FloatingDish = ({ src, className, ...props }: { src: string; className: string; [key: string]: any }) => (
    <div className={cn("absolute -z-10 opacity-10 hidden md:block", className)}>
         <Image src={src} alt="Floating dish" width={150} height={150} className="animate-pulse" {...props} />
    </div>
);
