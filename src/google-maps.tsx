import * as React from "react";

export interface GoogleMapsProps {
  /** @name Location @default Space Needle, Sattle WA */
  location?: string;

  /** @name Zoom @description 0 to 21 @default 16 */
  zoom: number;

  /** @name Map Type @default Roadmap */
  maptype: GoogleMapsMapType;

  /** @name Width @default 640px @group Size */
  width?: string;

  /** @name Height @default 480px @group Size */
  height?: string;
}

enum GoogleMapsMapType {
  Roadmap = '',
  Satellite = 'k',
  Terrain = 'p'
}

/** 
 * @name Google Maps
 * @icon MapPin
 */
export const GoogleMaps: React.SFC<GoogleMapsProps> = props => {
  return (
    <iframe
      frameBorder="0"
      style={{
        border: '0',
        width: props.width,
        height: props.height
      }}
      src={`https://maps.google.com/maps?q=${props.location}&output=embed&z=${props.zoom}&t=${props.maptype}`}
      allowFullScreen>
    </iframe>
  );
};
