import numpy as np
import pandas as pd
# %matplotlib inline
from flask import json
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from tabulate import tabulate

def process_csv(file_path):
    
    df = pd.read_csv(file_path, low_memory=False)
    
    data_dict = df.to_dict(orient='records')
    json_data = json.dumps(data_dict, indent=4)

    return json_data