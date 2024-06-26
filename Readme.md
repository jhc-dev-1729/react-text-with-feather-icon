# React Text With Feather Icon

A react component for front-end design.

<p style="text-align: center;">
<img src="https://drive.google.com/thumbnail?id=1ma8H_QzsmBAajHx0qMZLxz8kbbE3F4hd" alt="sample"></img>
</p>

## Installation

###  Install from the command line:
```
npm install @jhc-dev-1729/react-text-with-feather-icon@1.0.1
```

###  Install via package.json: 
```
"@jhc-dev-1729/react-text-with-feather-icon": "1.0.1"
```

## Usage

```
import { TextWithFeatherIcon } from "@jhc-dev-1729/react-text-with-feather-icon";
    ...
    <div>
        <TextWithFeatherIcon text="Feather" />
    </div>
    ...
```

> Preview

![sample-feather](https://drive.google.com/thumbnail?id=19zriShCmEic67SOlDT2kQGb4SoVTfS_z)

## Properties

### IconOptions
| Name | Type | Description |
| ---- | ---- | ----------- |
| name | string | Correspond to the [**feather icon**](https://feathericons.com/) name.  |
| stroke | string | Icon stroke color. |
| width | number | Icon width. |
| height | number | Icon height. |
| strokeWidth | number | Icon stroke width. |
| strokeLinecap | "butt" \| "round" \| "square" | The shape to be used at the end of open subpaths when they are stroked.
| strokeLinejoin | "round" \| "bevel" \| "miter" \| "inherit" \| undefined | the shape to be used at the corners of paths when they are stroked.

### TextWithIconProps
| Name | Type | Description |
| ---- | ---- | ----------- |
| text | string | A text that will be displayed on a component. |
| iconOptions | IconOptions \| undefined | -

## License
[MIT License](https://github.com/jhc-dev-1729/react-text-with-feather-icon/blob/master/LICENSE)
