import Container from '@/components/ui/container';

interface EventDetailPageProps {
    params: {
        eventId: string;
    }
}

const EventDetailPage: React.FC<EventDetailPageProps> = async ({
    params
}) => {
    return (
        <div className=' bg-white'>
            <Container>
            EventDetailPage
            </Container>
        </div>
    );
}

export default EventDetailPage;