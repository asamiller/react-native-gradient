#import "RNLinearGradient.h"
#import "RCTViewManager.h"

@interface RCT_EXTERN_MODULE(RNLinearGradientSwift, RCTViewManager)

  RCT_EXPORT_VIEW_PROPERTY(locations, NSArray);
  RCT_EXPORT_VIEW_PROPERTY(colors, NSArray);

@end