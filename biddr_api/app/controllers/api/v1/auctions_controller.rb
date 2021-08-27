class Api::V1::AuctionsController < Api::ApplicationController
    before_action :find_auction, only: [:show, :destroy, :update]

    def index
        auctions = Auction.order(id: :asc)
        render(json: auctions)
    end
    
    def show
        if @auction
            render(json: @auction)
        else
            render(json: {error: "Auction Not Found"})
        end
    end

    def create
    end

    private
    def find_auction
        @auction = Auction.find params[:id]
    end

    def auction_params
        params.require(:auction).permit(:title, :description)
    end
end
