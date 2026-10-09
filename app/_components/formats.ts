export const supportedFormats = [
  { id: "xtf", name: "XTF", ext: ".xtf", use: "Sidescan, sub-bottom, and magnetometer data", notes: "Uses XTF Rev. 40 structures. A mixed file may produce multiple layers." },
  { id: "jsf", name: "EdgeTech JSF", ext: ".jsf", use: "Sidescan and sub-bottom data", notes: "Message Type 80 is supported. Compressed JSF samples are not currently decoded." },
  { id: "segy", name: "SEG-Y", ext: ".segy, .sgy", use: "Sub-bottom profiles", notes: "Treated as a single-channel sub-bottom source." },
  { id: "dlpd", name: "Dolphin artifact", ext: ".dlpd", use: "Indexed and decoded survey data", notes: "Can be imported directly. Legacy .dpcache files are accepted on read." },
  { id: "geotiff", name: "GeoTIFF", ext: ".tif, .tiff", use: "Georeferenced image or elevation raster", notes: "Includes tiled, compressed, and BigTIFF inputs supported by GDAL." },
  { id: "world-file", name: "Georeferenced image", ext: ".pgw, .jgw, .wld", use: "PNG or JPEG map raster", notes: "The world file provides georeferencing for the image." },
];
