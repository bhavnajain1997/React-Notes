import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
const Body = () => {
    let [listOfRestaurant , setListOfRestaurant] = useState([
      {
        info: {
          id: "69504",
          name: "Apni Rasoi Int",
          cloudinaryImageId: "rc4snz7d3lhpshh06fky",
          locality: "DC chowk",
          areaName: "Rohini",
          costForTwo: "₹200 for two",
          cuisines: ["North Indian", "Chinese"],
          avgRating: 3.8,
          veg: true,
          feeDetails: {
            restaurantId: "69504",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 5300,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 5300,
          },
          parentId: "442102",
          avgRatingString: "3.8",
          totalRatingsString: "5K+",
          sla: {
            deliveryTime: 22,
            lastMileTravel: 3.8,
            serviceability: "SERVICEABLE",
            slaString: "22 mins",
            lastMileTravelString: "3.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-12-07 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: "BENEFITS",
              logo: "v1634558776/swiggy_one/OneLogo_3x.png",
            },
            freedelMessage: "FREE DELIVERY",
            exclusiveOfferMessage: "EXTRA 10% OFF",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=69504",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
      },
      {
        info: {
          id: "24155",
          name: "Domino's Pizza",
          cloudinaryImageId: "k5ytoz7hjyeumoeh74di",
          locality: "E Block",
          areaName: "Netaji Subhash Place",
          costForTwo: "₹400 for two",
          cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
          avgRating: 4.2,
          feeDetails: {
            restaurantId: "24155",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 4500,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 4500,
          },
          parentId: "2456",
          avgRatingString: "4.2",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 25,
            serviceability: "SERVICEABLE",
            slaString: "25 mins",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-12-08 02:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=24155",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
      },
      {
        info: {
          id: "28961",
          name: "Gulab",
          cloudinaryImageId: "d1ham4g7azt62xzvghfg",
          locality: "Pitampura",
          areaName: "Pitampura",
          costForTwo: "₹350 for two",
          cuisines: ["North Indian", "Sweets", "South Indian"],
          avgRating: 4.3,
          veg: true,
          feeDetails: {
            restaurantId: "28961",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 5000,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 5000,
          },
          parentId: "6808",
          avgRatingString: "4.3",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 1.8,
            serviceability: "SERVICEABLE",
            slaString: "19 mins",
            lastMileTravelString: "1.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-12-08 02:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: "BENEFITS",
              logo: "v1634558776/swiggy_one/OneLogo_3x.png",
            },
            freedelMessage: "FREE DELIVERY",
            exclusiveOfferMessage: "EXTRA 10% OFF",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=28961",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
      },
      {
        info: {
          id: "52962",
          name: "Faasos - Wraps & Rolls",
          cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
          locality: "BQ Market",
          areaName: "Ashok vihar",
          costForTwo: "₹200 for two",
          cuisines: [
            "Kebabs",
            "Fast Food",
            "Snacks",
            "North Indian",
            "American",
            "Healthy Food",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4.1,
          feeDetails: {
            restaurantId: "52962",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 4500,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 4500,
          },
          parentId: "21809",
          avgRatingString: "4.1",
          totalRatingsString: "5K+",
          sla: {
            deliveryTime: 21,
            lastMileTravel: 2.4,
            serviceability: "SERVICEABLE",
            slaString: "21 mins",
            lastMileTravelString: "2.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-12-07 23:59:00",
            opened: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                      description: "",
                      shortDescription: "options available",
                    },
                  },
                ],
              },
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹129",
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: "BENEFITS",
              logo: "v1634558776/swiggy_one/OneLogo_3x.png",
            },
            freedelMessage: "FREE DELIVERY",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=52962",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
      },
      {
        info: {
          id: "326429",
          name: "Punjabi Angithi (Vegorama Group)",
          cloudinaryImageId: "lgfkquq3npd3r9oiy62b",
          locality: "Satyawati Colony",
          areaName: "Ashok vihar",
          costForTwo: "₹400 for two",
          cuisines: ["North Indian", "Chinese", "Punjabi", "Snacks"],
          avgRating: 4.1,
          veg: true,
          feeDetails: {
            restaurantId: "326429",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 6100,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 6100,
          },
          parentId: "465050",
          avgRatingString: "4.1",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 24,
            lastMileTravel: 5.8,
            serviceability: "SERVICEABLE",
            slaString: "24 mins",
            lastMileTravelString: "5.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-12-07 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: "BENEFITS",
              logo: "v1634558776/swiggy_one/OneLogo_3x.png",
            },
            freedelMessage: "FREE DELIVERY",
            exclusiveOfferMessage: "EXTRA 10% OFF",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=326429",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
      },
      {
        info: {
          id: "12631",
          name: "Giani",
          cloudinaryImageId: "b9f3278aa437785772e368cfe584b342",
          locality: "Shalimar Bagh",
          areaName: "Ashok Vihar",
          costForTwo: "₹300 for two",
          cuisines: ["Ice Cream"],
          avgRating: 4.3,
          veg: true,
          feeDetails: {
            restaurantId: "12631",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 4500,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 4500,
          },
          parentId: "6577",
          avgRatingString: "4.3",
          totalRatingsString: "5K+",
          sla: {
            deliveryTime: 15,
            lastMileTravel: 2.3,
            serviceability: "SERVICEABLE",
            slaString: "15 mins",
            lastMileTravelString: "2.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-12-07 23:30:00",
            opened: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      description: "",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                    },
                  },
                ],
              },
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: "BENEFITS",
              logo: "v1634558776/swiggy_one/OneLogo_3x.png",
            },
            freedelMessage: "FREE DELIVERY",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=12631",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
      },
      {
        info: {
          id: "46857",
          name: "Bakingo",
          cloudinaryImageId: "t4krbxhzmffz1l2yxten",
          locality: "Singhal Pur",
          areaName: "Ashok vihar",
          costForTwo: "₹300 for two",
          cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
          avgRating: 4.3,
          feeDetails: {
            restaurantId: "46857",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 5200,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 5200,
          },
          parentId: "3818",
          avgRatingString: "4.3",
          totalRatingsString: "5K+",
          sla: {
            deliveryTime: 20,
            lastMileTravel: 2.3,
            serviceability: "SERVICEABLE",
            slaString: "20 mins",
            lastMileTravelString: "2.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-12-08 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: "BENEFITS",
              logo: "v1634558776/swiggy_one/OneLogo_3x.png",
            },
            freedelMessage: "FREE DELIVERY",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=46857",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
      },
      {
        info: {
          id: "10301",
          name: "Punjabi Rasoi",
          cloudinaryImageId: "tutwbl3kifmpg5jt7yw0",
          locality: "Sector 7",
          areaName: "Rohini",
          costForTwo: "₹400 for two",
          cuisines: [
            "North Indian",
            "Chinese",
            "South Indian",
            "Italian",
            "Desserts",
          ],
          avgRating: 4.3,
          veg: true,
          feeDetails: {
            restaurantId: "10301",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 6000,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 6000,
          },
          parentId: "467738",
          avgRatingString: "4.3",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 21,
            lastMileTravel: 4.1,
            serviceability: "SERVICEABLE",
            slaString: "21 mins",
            lastMileTravelString: "4.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-12-07 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "pureveg",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹75",
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: "BENEFITS",
              logo: "v1634558776/swiggy_one/OneLogo_3x.png",
            },
            freedelMessage: "FREE DELIVERY",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=10301",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
      },
      {
        info: {
          id: "412424",
          name: "Burger King",
          cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          locality: "2nd Phase",
          areaName: "NSP",
          costForTwo: "₹350 for two",
          cuisines: ["Burgers", "American"],
          avgRating: 4.3,
          feeDetails: {
            restaurantId: "412424",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 4500,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 4500,
          },
          parentId: "166",
          avgRatingString: "4.3",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 20,
            lastMileTravel: 1.8,
            serviceability: "SERVICEABLE",
            slaString: "20 mins",
            lastMileTravelString: "1.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-12-08 02:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: "BENEFITS",
              logo: "v1634558776/swiggy_one/OneLogo_3x.png",
            },
            freedelMessage: "FREE DELIVERY",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=412424",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
      },
      {
        info: {
          id: "72479",
          name: "Madras Dosa & Chinese Corner",
          cloudinaryImageId: "ig1pwdzlrqfqiubikm1l",
          locality: "Block-BQ",
          areaName: "Ashok vihar",
          costForTwo: "₹300 for two",
          cuisines: ["South Indian", "North Indian", "Chinese"],
          avgRating: 4,
          veg: true,
          feeDetails: {
            restaurantId: "72479",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 4500,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 4500,
          },
          parentId: "6777",
          avgRatingString: "4.0",
          totalRatingsString: "5K+",
          sla: {
            deliveryTime: 17,
            lastMileTravel: 2.5,
            serviceability: "SERVICEABLE",
            slaString: "17 mins",
            lastMileTravelString: "2.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-12-08 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: "BENEFITS",
              logo: "v1634558776/swiggy_one/OneLogo_3x.png",
            },
            freedelMessage: "FREE DELIVERY",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=72479",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
      },
      {
        info: {
          id: "386705",
          name: "BOX8 - Desi Meals",
          cloudinaryImageId: "69a061b7e0f951cef2b4947946f94ec6",
          locality: "DDA Market",
          areaName: "Ashok vihar",
          costForTwo: "₹250 for two",
          cuisines: ["North Indian", "Biryani", "Thalis", "Home Food"],
          avgRating: 4.1,
          feeDetails: {
            restaurantId: "386705",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 4500,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 4500,
          },
          parentId: "10655",
          avgRatingString: "4.1",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 15,
            lastMileTravel: 2.7,
            serviceability: "SERVICEABLE",
            slaString: "10-20 mins",
            lastMileTravelString: "2.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-12-08 02:00:00",
            opened: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      description: "",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                    },
                  },
                ],
              },
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "EVERY ITEM",
            subHeader: "@ ₹169",
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: "BENEFITS",
              logo: "v1634558776/swiggy_one/OneLogo_3x.png",
            },
            freedelMessage: "FREE DELIVERY",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=386705",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
      },
      {
        info: {
          id: "253784",
          name: "McDonald's",
          cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
          locality: "Shalimar Bagh",
          areaName: "Ashok vihar",
          costForTwo: "₹400 for two",
          cuisines: ["American"],
          avgRating: 4.3,
          feeDetails: {
            restaurantId: "253784",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 5300,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 5300,
          },
          parentId: "630",
          avgRatingString: "4.3",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 21,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "21 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-12-08 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: "BENEFITS",
              logo: "v1634558776/swiggy_one/OneLogo_3x.png",
            },
            freedelMessage: "FREE DELIVERY",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=253784",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
      }
    ])
    // Normal JS Variable
    let listOfRestaurantJS = [
        {
            info: {
              id: "69504",
              name: "Apni Rasoi Int",
              cloudinaryImageId: "rc4snz7d3lhpshh06fky",
              locality: "DC chowk",
              areaName: "Rohini",
              costForTwo: "₹200 for two",
              cuisines: ["North Indian", "Chinese"],
              avgRating: 3.8,
              veg: true,
              feeDetails: {
                restaurantId: "69504",
                fees: [
                  {
                    name: "BASE_DISTANCE",
                    fee: 5300,
                  },
                  {
                    name: "BASE_TIME",
                  },
                  {
                    name: "ANCILLARY_SURGE_FEE",
                  },
                ],
                totalFee: 5300,
              },
              parentId: "442102",
              avgRatingString: "3.8",
              totalRatingsString: "5K+",
              sla: {
                deliveryTime: 22,
                lastMileTravel: 3.8,
                serviceability: "SERVICEABLE",
                slaString: "22 mins",
                lastMileTravelString: "3.8 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2023-12-07 23:59:00",
                opened: true,
              },
              badges: {
                imageBadges: [
                  {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg",
                  },
                ],
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textExtendedBadges: {},
                  textBased: {},
                  imageBased: {
                    badgeObject: [
                      {
                        attributes: {
                          imageId: "v1695133679/badges/Pure_Veg111.png",
                          description: "pureveg",
                        },
                      },
                    ],
                  },
                },
              },
              aggregatedDiscountInfoV3: {
                header: "60% OFF",
                subHeader: "UPTO ₹120",
              },
              loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                  text: "BENEFITS",
                  logo: "v1634558776/swiggy_one/OneLogo_3x.png",
                },
                freedelMessage: "FREE DELIVERY",
                exclusiveOfferMessage: "EXTRA 10% OFF",
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=69504",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
          },
          {
            info: {
              id: "24155",
              name: "Domino's Pizza",
              cloudinaryImageId: "k5ytoz7hjyeumoeh74di",
              locality: "E Block",
              areaName: "Netaji Subhash Place",
              costForTwo: "₹400 for two",
              cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
              avgRating: 4.2,
              feeDetails: {
                restaurantId: "24155",
                fees: [
                  {
                    name: "BASE_DISTANCE",
                    fee: 4500,
                  },
                  {
                    name: "BASE_TIME",
                  },
                  {
                    name: "ANCILLARY_SURGE_FEE",
                  },
                ],
                totalFee: 4500,
              },
              parentId: "2456",
              avgRatingString: "4.2",
              totalRatingsString: "10K+",
              sla: {
                deliveryTime: 25,
                serviceability: "SERVICEABLE",
                slaString: "25 mins",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2023-12-08 02:59:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {},
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "UPTO ₹50",
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=24155",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
          },
    ];
    console.log(listOfRestaurant)
    return (
      <div className="body-container">
        {/* <div className="search">Search</div> */}
        <div className="filter">
            <button className="filter-btn" onClick={() => {
              listOfRestaurant = listOfRestaurant.filter((res) => {
               return res.info.avgRating > 4;
              })
              setListOfRestaurant(listOfRestaurant);
            }}>
                Top Rated Restaurants
                </button>
        </div>
        <div className="restaurant-container">
          {
  
           listOfRestaurant.map(restaurant => {
            return <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
            
           }
           
           )
           
          }
  
        </div>
      </div>
    );
  };
export default Body;