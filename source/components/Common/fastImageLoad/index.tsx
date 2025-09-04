import React from 'react';
// third-party
import type {ResizeMode} from 'react-native-fast-image';
import FastImage from 'react-native-fast-image';
import {SvgUri} from 'react-native-svg';

// components
// import Loader from '../loader';

interface FastImageComponentProps {
  source: number | string; // Use appropriate type, e.g., { uri: string } | number for local images
  style?: any;
  cache?: 'immutable' | 'web' | 'cacheOnly';
  onErrorImage?: number | string; // Similar type as `source`
  resizeMode?: ResizeMode;
}

const FastImageLoad = (props: FastImageComponentProps): React.ReactElement => {
  const {source, style, cache = 'immutable', resizeMode = 'cover'} = props;

  // const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  // Function to handle error
  const handleError = (): void => {
    // setLoading(false);
    setError(true);
  };

  // Function to check if the source is a local image
  const isLocalImage = (source: number | string): source is number => {
    // Check if the source is a local image
    return typeof source === 'number'; // Local images are usually referenced by a number
  };

  const isSvgUrl = (src: string): boolean => {
    return src?.toLowerCase().endsWith('.svg');
  };

  // ✅ Strictly render SVG and exit early
  if (typeof source === 'string' && isSvgUrl(source)) {
    return (
      <SvgUri
        uri={encodeURI(source)}
        style={style}
        height={style?.height}
        width={style?.width}
      />
    );
  }

  return (
    <>
      {isLocalImage(source) ? (
        <FastImage
          source={source}
          style={[style, error && {display: 'none'}]}
          // onLoadEnd={() => setLoading(false)}
          resizeMode={resizeMode}
          onError={handleError}
        />
      ) : (
        <FastImage
          source={{
            uri: encodeURI(source),
            cache: cache || FastImage.cacheControl.immutable,
            priority: FastImage.priority.high,
          }}
          style={[style, error && {display: 'none'}]}
          resizeMode={resizeMode}
          // onLoadEnd={() => setLoading(false)}
          onError={handleError}
        />
      )}
      {/* {loading && <Loader loading={true} />} */}
    </>
  );
};

export default FastImageLoad;
