export interface VideoProps extends VideoFooterProps {
    likes: number;
    messages: number;
    shares: number;
    url?: string;
}

export interface VideoFooterProps {
    name?: string;
    description?: string;
    music?: string;
}