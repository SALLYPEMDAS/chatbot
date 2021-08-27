# chatbot

```
pip install -r requirements.txt
```

```
source env/bin/activate
```

```
python3 gpt-2/download_model.py 355M
```

The model sizes for gpt-2 are 124M, 355M, 774M, 1558M (actual downloaded model sizes will be larger)


Downgrading from python 3.9

```
rm -rf $(brew --repository)/Library/Taps/company
brew tap-new company/team
brew extract python@3.7 company/team  --version=3.7.9 
HOMEBREW_NO_AUTO_UPDATE=1  brew install company/team/python@3.7.9
brew link --force company/team/python@3.7.9

```

https://stackoverflow.com/a/64600841

