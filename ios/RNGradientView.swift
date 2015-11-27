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
class RNGradientView : UIView {
  

  override func layoutSubviews() {
    let gradientView = GradientView(frame: self.bounds)
        // Set the gradient colors
    gradientView.colors = [UIColor.blueColor(), UIColor.yellowColor()]
    
    // Optionally set some locations
    gradientView.locations = [0.8, 1.0]
    
    // Optionally change the direction. The default is vertical.
    //    gradientView.direction = .Horizontal
    
    // Add some borders too if you want
    //    gradientView.topBorderColor = UIColor.redColor()
    //    gradientView.bottomBorderColor = UIColor.blueColor()

    self.addSubview(gradientView);
  }


}