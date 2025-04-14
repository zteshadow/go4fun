//
//  GFWebview.swift
//  go4fun
//
//  Created by samuelsong on 2025/3/25.
//

import SwiftUI
import WebKit

struct GFWebview: UIViewRepresentable {

    let url: URL

    func makeUIView(context: Context) -> WKWebView {
        return WKWebView()
    }

    func updateUIView(_ uiView: WKWebView, context: Context) {
        let request = URLRequest(url: url)
        uiView.load(request)
    }
}

struct GFWebview_Previews: PreviewProvider {
    static var previews: some View {
        GFWebview(url: URL(string:"https://www.agoda.com")!)
    }
}
