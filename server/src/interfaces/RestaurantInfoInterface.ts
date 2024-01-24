export interface IRestaurantInfo {
    restaurantId: number
    restaurantName: string;
    location: string;
    country: object;
    halal: boolean;
    billPerClient: number;
    website: string;
    restaurantPhone: number;
    veganFriendly: boolean;
    sellsAlcohol: boolean;
    monthlyOrders: string;
    restaurantLogo: string;
    typeOfRestaurant: string;
    kidsZone: boolean;


    delivery: boolean;
    deliveryTimeStart: Date | null;
    deliveryTimeEnd: Date | null;
    minimumDeliveryAmount: number;
    maximumDeliveryRange: number;

    pickup: boolean
    pickupTimeStart: Date | null;
    pickupTimeEnd: Date | null;


    operationOpeningTime: Date;
    operationClosingTime: Date;

    breakfastStart?: Date;
    breakfastEnd?: Date;

    lunchStart?: Date;
    lunchEnd?: Date;

    dinnerStart?: Date;
    dinnerEnd?: Date;

    dineInTimeStart?: Date;
    dineInTimeEnd?: Date;


    operatingDays: string[];
    cuisines: string[];
    orderServingMethod: string;
    doesOperateOnHolidays: boolean;
    maximumWaiterNumber: number;
    maximumChefNumber: number;
    maximumDinningCapacity: number;
    dinningAreaSqFeet: number;
    kitchenAreaSqFeet: number;


    bankName: string;
    bankAccountHolder: string;
    bankAccountNumber: number;
    bankAccountRoutingNumber: number;
}

export interface IRatingAddedRestaurantInterface extends IRestaurantInfo {
    rating?: any // FIX here after taking interface from zerin apu
}