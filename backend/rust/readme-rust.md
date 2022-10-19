# Doc

https://course.rs/

# Install rust on Linux
`curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh`

# Install rust on Windows

* Install `MSYS` from `https://www.msys2.org/` and run `MSYS` console
* On `MSYS` console, install rust via `curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh`
* After installing rust, check installation via `rustc -V` and `cargo -V`. If they are failed to run, check if there is `%USERPROFILE%\.cargo\bin` in `%PATH%`. If it still does not work, you may have to reboot the Windows.
* 