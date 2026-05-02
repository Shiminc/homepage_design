import pandas as pd
import json

VIZ_list = [
        [2,7],[2,6],[3,5],[3,4],[4,3],[4,2],[5,1],[6,2],[6,3],[7,4],[7,5],[8,6],[8,7]
    ]

def create_coordinates(X,Y):

    coordinates = []
    Xs = list(range(0,X))
    Ys = list(range(0,Y))
    for x in Xs:
        for y in Ys:
            if [x,y] in VIZ_list:
                coordinates.append({'x':x, 'y':y, 'alphabet':1})
            else:
                coordinates.append({'x':x, 'y':y, 'alphabet':0})

    print(Xs)
    print(Ys)
    return coordinates


def main():
    # coordinates for heatmap
    coordinates = create_coordinates(23,9)
    # encode_viz(coordinates)
    with open('../data/viz_coordinates.json','w') as file:
        file.write(json.dumps(coordinates))
    print('finish')

main()