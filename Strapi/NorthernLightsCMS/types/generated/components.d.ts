import type { Schema, Attribute } from '@strapi/strapi';

export interface AmenitiesAmonity extends Schema.Component {
  collectionName: 'components_amenities_amonities';
  info: {
    displayName: 'amonity';
    icon: 'bulletList';
  };
  attributes: {
    amonity: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'amenities.amonity': AmenitiesAmonity;
    }
  }
}
