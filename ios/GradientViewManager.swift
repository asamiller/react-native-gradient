//
//  GradientViewManager.swift
//  GradientTest
//
//  Created by Asa Miller on 11/23/15.
//  Copyright © 2015 Asa Miller. All rights reserved.
//

import Foundation
import GradientView

@objc(RNLinearGradientSwift)
class GradientViewManager : RCTViewManager {
  override func view() -> UIView! {
    // Initialize a gradient view
    let gradientView = GradientView(frame: CGRectMake(20, 20, 280, 280))
    
    // Set the gradient colors
    gradientView.colors = [UIColor.blueColor(), UIColor.yellowColor()]
    
    // Optionally set some locations
    gradientView.locations = [0.8, 1.0]
    
    // Optionally change the direction. The default is vertical.
//    gradientView.direction = .Horizontal
    
    // Add some borders too if you want
//    gradientView.topBorderColor = UIColor.redColor()
//    gradientView.bottomBorderColor = UIColor.blueColor()

    return gradientView
  }
}