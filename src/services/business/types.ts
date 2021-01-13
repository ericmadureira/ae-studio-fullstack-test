export interface Location {
  latitude: string;
  longitude: string;
}

export interface Business {
  business_name: string;
  city: string;
  council_district: string;
  location_1: Location;
  location_account: string;
  location_description: String;
  location_start_date: string;
  naics: string;
  primary_naics_description: string;
  street_address: string;
  zip_code: string;
}
