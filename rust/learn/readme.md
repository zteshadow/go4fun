
# Cargo project
```bash
cargo new xxx // create new
cargo init // init for current src code
cargo build // build project, you can find the target at ./target/debug/xxx, --release to generate release version
cargo run // build and run
cargo check // build without generate binary
```

# Compile
```bash
rustc main.rs
```

# Install
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source ~/.cargo/env.fish
```

# Book
```bash
rustup doc --book 
```