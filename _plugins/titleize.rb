# frozen_string_literal: true

module Jekyll
  module Titleize
    def titleize(text)
      text.split(' ').map(&:capitalize).join(' ')
    end
  end
end

Liquid::Template.register_filter(Jekyll::Titleize)
