//
//  ContentView.swift
//  go4fun
//
//  Created by samuelsong on 2025/3/25.
//

import SwiftUI

struct ContentView: View {
    // 1
        @State private var isPresentWebView = false

        var body: some View {
            Button("Open WebView") {
                // 2
                isPresentWebView = true

            }
            .sheet(isPresented: $isPresentWebView) {
                NavigationStack {
                    // 3
                    GFWebview(url: URL(string: "https://www.google.com")!)

                        .ignoresSafeArea()
                        .navigationTitle("Go 4 Fun")
                        .navigationBarTitleDisplayMode(.inline)
                }
            }
        }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
