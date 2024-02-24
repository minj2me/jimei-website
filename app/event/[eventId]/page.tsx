import Container from '@/components/ui/container';

interface EventDetailPageProps {
    params: {
        eventId: string;
    }
}

/**
 * 推文详情页
 */
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