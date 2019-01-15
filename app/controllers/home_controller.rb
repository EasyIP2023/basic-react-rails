# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    @home_props = { name: 'Stranger' }
  end
end
