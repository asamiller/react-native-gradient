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
class RNGradientViewManager : RCTViewManager {
  override func view() -> UIView! {
    return RNGradientView();
  }
}