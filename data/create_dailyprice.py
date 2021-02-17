import requests
import csv


class GasPricDailyExtract:
    def __init__(self, ):
        self.url = 'http://api.eia.gov/series/?api_key=7aa4fc219b4c42daa38b3abb34398123&series_id=NG.RNGWHHD.D'

    def request(self):
        """
        this func get  a Json data from the url
        """
        req = requests.get(self.url)
        return req.json()['series'][0]['data']

    def manipulate_date(self, date):
        """
        This function is use to manipulate the date data 
        """

        date_to_string = str(date[0])
        date = date_to_string[0:4] + "-" + date_to_string[4:6] + "-" + date_to_string[6:]
        return date

    def manipulate_data(self):
        """
        This function manipulate data date and price into different
        Dictionary key 
        """
        d = {"date": list(map(self.manipulate_date, self.request())), "price": [price[1] for price in self.request()]}
        return d

    def process_to_csv(self):
        """
        Helps to process and export the data into csv file 
        """
        print("starting")
        data = self.manipulate_data()
        outfile=open("daily-price.csv", "w", newline='')
        writer = csv.writer(outfile, delimiter=',', quotechar='"', quoting=csv.QUOTE_ALL)
        writer.writerow(data.keys())
        writer.writerows(zip(*data.values()))
        print("Done converting to csv")





if __name__ == '__main__':
    gas=GasPricDailyExtract()
    gas.process_to_csv()