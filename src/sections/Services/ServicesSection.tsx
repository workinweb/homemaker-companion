import { ServiceCard } from "~/components/Cards/ServiceCard/ServiceCard";
import { Title } from "~/components/Titles/Title";

export function ServicesSection() {
    return (
        <section id="Services">
            <Title title={"Services"} />

            <div className="flex flex-col justify-center gap-8 md:flex-row">
                <ServiceCard
                    img="/14.jpg"
                    alt="We are cost effective and offer flexible schedules"
                    title={`Homemaker Services`}
                    displayText={`Meal Planing and Preparation
                    Laundry andlLinens
                    Light housekeeping services
                    Grocery Shopping
                    Medication reminders
                    Taking out the garbage
                    Room organization
                    Safety`}
                    text={`We are cost effective and offer flexible schedules
                No contracts
                Choose the service you want, when to start, 
                and how often.
                Change services whenever you need.
                Available 24 hours a day, 7 days a week!
            `}
                />

                <ServiceCard
                    img="/15.jpg"
                    alt="Payment forms"
                    title={`Companion Services`}
                    displayText={`Errands/Transportation/Prescription pickup
                    Accompanying consumers for a walk outside
                    Accompanying to activities/Restaurants/Events
                    Playing games/Watching TV/Cards/Bingo/Crafts
                    Reading a book aloud`}
                    text={`Payment forms
                The following payment forms are accepted at Evan Home Care Services:
                Personal Funds or Private Pay:
                Credit cards, such as 
                Visa
                MasterCard
                American Express 
                Discover
                Personal checks
            `}
                />
            </div>
        </section>
    );
}
