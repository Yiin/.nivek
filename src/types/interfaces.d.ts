export declare type Nullable<T> = T | null;

export interface User {
    bio: Nullable<string>;
    first_name: string;
    instagram_username: Nullable<string>;
    last_name: Nullable<string>;
    links: {
        followers: string;
        following: string;
        html: string;
        likes: string;
        photos: string;
        portfolio: string;
        self: string;
    };
    location: Nullable<string>;
    name: string;
    portfolio_url: Nullable<string>;
    profile_image: {
        small: string;
        medium: string;
        large: string;
    };
    total_collections: number;
    total_likes: number;
    total_photos: number;
    twitter_username: Nullable<string>;
    updated_at: string;
    username: string;
}

export interface Image {
    id: string;
    created_at: string;
    updated_at: string;
    urls: {
        full: string;
        raw: string;
        regular: string;
        small: string;
        thumb: string;
    };
    alt_description: Nullable<string>;
    blur_hash: Nullable<string>;
    color: Nullable<string>;
    description: Nullable<string>;
    height: number;
    likes: number;
    links: {
        self: string;
        html: string;
        download: string;
        download_location: string;
    };
    promoted_at: Nullable<string>;
    width: number;
    user: User;
    related_collections: {
        type: RelatedCollectionsType;
        results: any[];
        total: number;
    };
    exif?: {
        make: Nullable<string>;
        model: Nullable<string>;
        exposure_time: Nullable<string>;
        aperture: Nullable<string>;
        focal_length: Nullable<string>;
        iso: Nullable<number>;
    };
    location?: {
        city: Nullable<string>;
        country: Nullable<string>;
        name: Nullable<string>;
        position: {
            latitude: Nullable<number>;
            longitude: Nullable<number>;
        };
    };
}
