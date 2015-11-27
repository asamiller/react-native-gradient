//
//  GradientView.swift
//  GradientTest
//
//  Created by Jason Brown on 11/26/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

import Foundation
import GradientView

@objc(RNGradientView)
class RNGradientView : GradientView {
    
  override init(frame: CGRect) {
    super.init(frame: frame);
    self.frame = frame;
    self.colors = [UIColor.blueColor(), UIColor.redColor(), UIColor.yellowColor()]
  }

  required init?(coder aDecoder: NSCoder) {
      fatalError("init(coder:) has not been implemented")
  }
  
  func setLocations(locations: NSArray) {
    self.locations = locations.map({ return $0 as! CGFloat});
  }
}